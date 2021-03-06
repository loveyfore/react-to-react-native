const t = require('@babel/types')
const parser = require('@babel/parser')
const generator = require('@babel/generator').default

const astUtils = {
  name: 'astUtils',
  /**
   * 对象的AST转为JS形式的对象
   * @param {*} objectExpressionPath 
   */
  objAstToObj(objectExpressionPath) {
    const obj = {}
    const properties = objectExpressionPath.get('properties')
    for (let property of properties) {
      const key = property.get('key').node.name
      const valuePath = property.get('value')
      if (valuePath.isNumericLiteral() || valuePath.isStringLiteral()) {
        const value = valuePath.isNumericLiteral() ? Number(valuePath.node.value) : valuePath.node.value
        obj[key] = value
      }
    }
    return obj
  },

  objToObjAst(obj) {
    return t.objectExpression(
      Object.entries(obj).map(([key, value]) => (
        t.objectProperty(
          t.identifier(key),
          typeof value === 'number' ? t.numericLiteral(value) : t.stringLiteral(value)
        )
      ))
    )
  },

  /**
   * AST转源代码
   * @param {*} ast 
   */
  ast2code(ast) {
    return generator(ast, {
    }).code
  },

  /**
   * 源代码转AST
   * @param {*} code 
   */
  code2ast(code) {
    const ast = parser.parse(code, {
      sourceType: "module",
      plugins: [
        "jsx",
        "classProperties",
      ]
    })
    return ast
  }
}

module.exports = astUtils