module.exports = function({path, ctx, t, constant}) {
  const srcAttrValue = ctx.jsxUtils.getJSXAttributeValue(path, 'src')
  srcAttrValue.replaceWith(
    t.JSXExpressionContainer(
      t.CallExpression(
        t.MemberExpression(
          t.identifier(ctx.enums.RNUTILS_USE_NAME),
          t.identifier(ctx.enums.IMG_POLYFILL_FUNC),
        ),
        [
          srcAttrValue.isJSXExpressionContainer() ?
            srcAttrValue.get('expression').node : srcAttrValue.node
        ]
      )
    )
  )
  ctx.jsxUtils.replaceJSXAttributeKey(path, 'src', 'source')
}