import { NextPage } from "next";
import Head from 'next/head'
interface IProps {
  title: string
}

const SEO:NextPage<IProps> = ({title}) => {
  return (
    <Head>
      <title>{title} | Next</title>
    </Head>
  )
}

export default SEO;