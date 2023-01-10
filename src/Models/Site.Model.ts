import { model, Schema } from "mongoose"
import { nanoid } from "nanoid"

export type ISite = {
  name: string
  siteId: string
  count: number
  view: {
    title: string
    count: number
  }[]
}

export const siteSchema = new Schema<ISite>({
  name: {
    type: String,
    required: true,
  },
  siteId: {
    type: String,
    default: () => nanoid(12),
  },
  count: {
    type: Number,
    default: 0,
  },
  view: {
    type: [
      {
        title: String,
        count: Number,
      },
    ],
  },
})

const Site = model<ISite>("Site", siteSchema)

export default Site
