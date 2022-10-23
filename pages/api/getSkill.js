import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

const query = groq`
    *[_type == 'skill']|order(title)
`

export default async function handler(req, res) {
    const skill = await sanityClient.fetch(query)

    res.status(200).json({ skill })
}