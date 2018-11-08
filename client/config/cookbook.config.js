/**
 * 菜谱模板
 * 2018-10-31
 */
const Map = (r => {
  return r.keys().map(key => {
    return {
      id: key.replace(/^(\.\/)(.+)(\.json)$/ig, '$2'),
      ...r(key)
    };
  });
})(require.context('./cookbooks', false, /\.json$/)).reverse();

export const list = Map.map(item => {
  let {
    id,
    name,
    sub,
    banner,
    color
  } = item;
  return {
    id,
    name,
    sub,
    banner,
    color
  };
});
export const detail = Map.map(item => {
  return {
    pc: item.pc,
    mobile: item.m,
    name: item.name
  };
});
