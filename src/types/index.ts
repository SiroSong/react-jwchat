import { CSSProperties, MouseEventHandler, UIEventHandler } from "react"

export type IMessageType = "text" | "image"

export interface IPureMsg {
  type: IMessageType
  content: string
}

export interface IContact {
  id?: number | string
  avatar?: string
  nickname?: string
  message?: string
  date?: string
  desc?: string
}

export interface IMessage {
  _id: string
  /** 秒级时间戳 */
  date: number
  user: IContact
  message: IPureMsg
}

export interface IChatProps {
  onSend: (data: IMessage) => void
  me: IContact
  contact: IContact
  style?: CSSProperties
  chatList?: IMessage[]
  onImage?: (files: FileList | null) => void
  onEarlier?: MouseEventHandler
}

export interface IContactItem {
  style?: CSSProperties
  selected?: boolean
  border?: boolean
  contact?: IContact
  onClick?: (c: IContact | undefined) => void
}

export interface IContactList {
  data: IContact[]
  style?: CSSProperties
  onSelect?: (c: IContact) => void
  onScroll?: UIEventHandler<HTMLDivElement>
}

export interface IChatRecordList {
  data: IMessage[]
  me: IContact
  onEarlier?: MouseEventHandler
}

export interface IChatToolBar {
  onEmojiSelect?: (emoji: string) => void
  onImage?: (files: FileList | null) => void
}

export interface IEmojiPopover {
  onSelect: (emoji: string) => void
}

export interface IImgPopover {
  onImage: (files: FileList | null) => void
}

export interface IMsgBubble {
  data: IPureMsg
  isMe: boolean
}

export interface IMsgItem {
  data: IMessage
  me: IContact
}

export interface IChatInput {
  me: IContact
  onSend: (msg: IMessage) => void
  onImage?: (files: FileList | null) => void
}
