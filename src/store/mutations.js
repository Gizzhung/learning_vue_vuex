import * as types from './mutations_type.js'


// state
export const state = {
  count: 0,
  
}
// mutations
export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE] (state,cc) {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    state.count += parseInt(cc);
    console.log('INCREASE', cc, 'state?', state.count);
  },
  [types.DECREASE] (state,cc) {
    state.count -= parseInt(cc);
    console.log('DECREASE', cc, 'state?', state.count);
  },
  [types.RESET] (state) {
    state.count = 0;
    console.log('RESET - state?', state.count);
  },
}