export interface ISelfProp {}

export interface IState {}

interface IStoreProps {
  home: {
    count: number
  }
}
interface IStoreDispatch {
  dispatch: any
}
export type IProps = ISelfProp & IStoreDispatch & IStoreProps
