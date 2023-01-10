import { Request, Response } from "express"
import logger from "../Logger/index.js"
import Site, { ISite } from "../Models/Site.Model.js"

export const siteViewIncrement = async (req: Request, res: Response) => {
  const { siteId }: ISite = req.body
  try {
    const site = await Site.findOne({ siteId })
    if (!site) return res.status(500).send({ message: "Incorrect Site Code" })
    await site.update({
      $inc: {
        count: 1,
      },
    })
    return res.status(200).send({ message: "Site View Incremented" })
  } catch (err) {
    logger.error("siteViewIncrement", err)
    return res.status(500).send(err)
  }
}

export const getSiteView = async (req: Request, res: Response) => {
  const { siteId }: ISite = req.body
  try {
    const site = await Site.findOne({ siteId })
    if (!site) return res.status(500).send({ message: "Incorrect Site Code" })
    return res.status(200).send({ message: "Site View", count: site.count })
  } catch (err) {
    logger.error("getSiteView", err)
    return res.status(500).send(err)
  }
}

export const createSite = async (req: Request, res: Response) => {}
