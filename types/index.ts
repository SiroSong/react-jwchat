import {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  UIEventHandler,
} from "react"

export interface IChatProps {
  onSend: (data: any) => void
  me: IContact
  contact: IContact
  style: CSSProperties & { height: number }
  chatList: any[]
  onImage?: () => void
  onEarlier?: MouseEventHandler
}

export interface IContact {
  id?: number | string
  avatar?: string
  nickname?: string
  message?: string
  date?: string
  desc?: string
}

export interface IContactItem {
  styles?: CSSProperties
  selected?: boolean
  border?: boolean
  contact?: IContact
  onClick?: (c: IContact | undefined) => void
}

export interface IChatRecordList {
  onEarlier?: MouseEventHandler
  data: any[]
  me: IContact
  style?: CSSProperties
}

export interface IChatToolBar {
  tools?: any[]
  onEmojiSelect?: () => void
  onImage?: () => void
}

export interface IContactList {
  onSelect?: (c: IContact) => void
  data: IContact[]
  onScroll?: UIEventHandler<HTMLDivElement>
}

export interface IEmojiPopover {
  onSelect: (emoji: any) => void
}

export interface IImgPopover {
  onImage: (img: any) => void
}

export interface IMsgBubble {
  data: IPureMsg
  isMe: boolean
}

export interface IMsgItem {
  data: IMessage
  me: IContact
}

export interface IScrollWrapper {
  data: any[]
  style?: CSSProperties
  scrollToBottom?: boolean
  children?: ReactNode
}

export interface IChatInput {
  me: IContact
  onSend: (msg: any) => void
  onImage?: () => void
  height: number
}

export type IMessageType = "text" | "image"

export interface IPureMsg {
  type: IMessageType
  content: string
}

export interface IMessage {
  _id: string
  date: number
  user: IContact
  message: IPureMsg
}
