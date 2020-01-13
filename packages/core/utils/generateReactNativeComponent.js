module.exports = function generateReactNativeComponent({
  ctx
}) {
  function genUsingComponentCode(rnUsingComponentName) {
    const componentStr = rnUsingComponentName.join(',\n  ')
    return `import {
    AppRegistry,
    StyleSheet,
    ${componentStr}\n} from 'react-native'`
  }
  
  function genStyleSheet(finalStyleObject) {
    return `const ${ctx.enums.STYLESHEET_NAME} = StyleSheet.create(` + JSON.stringify(finalStyleObject, null, 2) + ')'
  }

  const {
    usingRNComponentNames,
    finalStyleObject,
    collections,
  } = ctx

  const importReact = ctx.astUtils.ast2code(collections.importReactPath)
  const usingCode = genUsingComponentCode(usingRNComponentNames)
  const styleSheet = genStyleSheet(finalStyleObject)
  const component = ctx.astUtils.ast2code(ctx.afterPackageCode)
  const result = [
    importReact,
    usingCode,
    component,
    styleSheet,
  ].join('\n')

  return result
}
