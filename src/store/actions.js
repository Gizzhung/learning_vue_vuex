
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit },cc) => {
  console.log('actionIncrease', cc);
  commit(types.INCREASE,cc);
}

export const actionDecrease = ({ commit },cc) => {
  console.log('actionDecrease', cc);
  commit(types.DECREASE,cc);
}
export const reset = ({commit}) =>{
  console.log('reset');
  commit(types.RESET);
}
