import React, { useEffect, useState } from "react"
import Prismic from "@prismicio/client";
import { Client } from '../utils/prismicHelpers';
import SliceZone from "next-slicezone";
import { useGetStaticProps } from 'next-slicezone/hooks'
import resolver from "../sm-resolver.js";
import { Layout } from "../components";

const Home = ({slices}) =>  {

  return (
    <>
      <Layout>
        <SliceZone slices={slices} resolver={resolver} />
      </Layout>
    </>
  )
}


export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'home', 
  queryType: 'single',
})



export default Home
