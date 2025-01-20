// import MessageVN from '@/public/assets/language/vn.json'
import { LANGUAGE_SUPPORT } from './app'
 

const localeVN = {
  locale: LANGUAGE_SUPPORT.VN,
  messages: {},
}

export enum ZUSTAND {
  Setting = 'setting',
  ModalAdmin = 'modalAdmin',
  Modal = 'modal',
  Drawer = 'drawer',
  Language = 'language',
  ChatSocket = 'chatSocket',
  UserData = 'userData',
  ConnectedChain = 'connectedChain',
  CategoryMenu = 'categoryMenu',
  Provinces = 'provinces',
}

export const INIT_ZUSTAND = {
  [ZUSTAND.Language]: localeVN,
  [ZUSTAND.Setting]: null,
  [ZUSTAND.UserData]: null,
  [ZUSTAND.ConnectedChain]: 56,
  [ZUSTAND.CategoryMenu]: [],
  [ZUSTAND.Provinces]: [],
  [ZUSTAND.ModalAdmin]: {
    open: false,
    body: null,
  },
  [ZUSTAND.Modal]: {
    content: null,
    open: false,
  },
  [ZUSTAND.Drawer]: {
    content: null,
    open: false,
  },
}

export type TYPE_USER_DATA = {
  _id?: string
  address?: string
  addressShipper: Array<{
    address: string
    addressDetail: string
  }>
  sdt?: string
  name?: string
  pass?: string
  [key: string]: any
}

export type TYPE_ZUSTAND = {
  [ZUSTAND.Language]: {
    locale: string
    messages: any
  }
  [ZUSTAND.Setting]: { [key: string]: string } | null
  [ZUSTAND.UserData]: TYPE_USER_DATA | null
  [ZUSTAND.ConnectedChain]: number
  [ZUSTAND.CategoryMenu]: Array<{
    keyName: string
    icon?: string
    lang?: { [key: string]: string }
    [key: string]: any
  }>
  [ZUSTAND.Provinces]: any[]
  [ZUSTAND.ModalAdmin]: {
    open?: boolean
    body?: React.ReactNode
    className?: string
    classNameContent?: string
    width?: string
    height?: string
    callBackAfter?: (param?: any) => any
    title?: React.ReactNode | string
    showBtnClose?: boolean
    overClickClose?: boolean
  }
  [ZUSTAND.Modal]: {
    classContent?: string | ''
    content?: React.ReactNode
    open?: boolean | false
    title?: React.ReactNode | string | undefined
    overClickClose?: boolean | true
    showBtnClose?: boolean | true
  } 

  [ZUSTAND.Drawer]: {
    content?: React.ReactNode
    afterClose?: ((param?: any) => any) | null
  }  
}

// export type TYPE_LANGUAGE = typeof MessageVN
// export type PATH_LANGUAGE<T, Prefix extends string = ''> = T extends object
//   ? {
//       [K in keyof T]: PATH_LANGUAGE<T[K], `${Prefix}${Prefix extends '' ? '' : '.'}${K & string}`>
//     }[keyof T]
//   : Prefix
