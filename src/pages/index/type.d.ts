export interface ISelfProp {}

export interface IState {}

interface IStoreProps {
  counter: {
    count: number
  }
}
interface IStoreDispatch {
  add: () => any
  reduce: () => any
  asyncAdd: () => any
}
export type IProps = ISelfProp & IStoreDispatch & IStoreProps
