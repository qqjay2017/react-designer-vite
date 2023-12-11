/**
 * 模版字符串解析
 * @param apiHeader
 * @param userObj  用户信息注入
 * @param pageObj  页面信息注入
 * @returns
 */
export const parseHeaderArr2Obj = (
  apiHeader: any[] = [],
  userObj = {},
  pageObj = {}
) => {
  return apiHeader.reduce((memo, cur) => {
    if (cur.name) {
      const val = (cur.value || "").trim();
      const needInject = val.startsWith("{{") && val.endsWith("}}");

      if (!needInject) {
        memo[cur.name] = val;
        return memo;
      } else {
        try {
          const innerVal = val.slice(2, -2);
          const valInjectFn = new Function("user", "page", "return" + innerVal);
          const newVal = valInjectFn(
            {
              ...userObj,
            },
            {
              ...pageObj,
            }
          );
          memo[cur.name] = newVal;
          return memo;
        } catch (error) {
          return memo;
        }
      }
    }

    return memo;
  }, {});
};
