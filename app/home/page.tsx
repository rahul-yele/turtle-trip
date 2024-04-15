/* eslint-disable react/jsx-key */
"use client"
import axiosInstance from "@/axios";
import Card from "@/component/Card/Card";
import Navbar from "@/component/Navbar/Navbar";
import Result from "@/component/Result/Result";
import Searchbar from "@/component/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { API_ENDPOINT } from "@/constants";
import { Response } from "@/types/flight-offer";
import Spinner from "@/component/Spinner/Spinner";
<<<<<<< HEAD
import Filter from "@/component/Filter/Filter";
=======
>>>>>>> 0596e94c0a7ed7200b44c87ca4e6f064a6c21e69

export default function Home() {
  const [data, setData] = useState<Response>()
  const [dictionary, setDictionary] = useState<Response>()
  const [loading, setLoading] = useState(false)

  async function getData() {
    const { data }: any = await axiosInstance.get(API_ENDPOINT.FLIGHT_OFFER)
    setData(data)
    setDictionary(data?.dictionaries)
    setLoading(false)
<<<<<<< HEAD
    
=======
>>>>>>> 0596e94c0a7ed7200b44c87ca4e6f064a6c21e69
  }


  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <Searchbar getData={getData} setLoading={setLoading} />
        <Result />
      </div>
<<<<<<< HEAD
      
      <div>
          
        {loading ? 
        (<Spinner /> ): (
          <div className={styles.cardList}>
            {data && dictionary ? <Filter/>:''}
            <div>
            {(data && dictionary && data.data.map((item, idx: number) => (
              
              <Card data={data?.data[idx]} dictionary={dictionary} className={`hover:bg-blue-100 focus:outline-none shadow-lg ${styles.sideCard}`} />
              
            )))}
            </div>
          </div>
        )}
        
=======
      <div className={styles.cardList}>
        {loading ? <Spinner /> : (data && dictionary && data.data.map((item, idx: number) => (
          <Card data={data?.data[idx]} dictionary={dictionary} className={`hover:bg-blue-100 focus:outline-none shadow-lg ${styles.sideCard}`} />
        )))}
>>>>>>> 0596e94c0a7ed7200b44c87ca4e6f064a6c21e69
      </div>
      

    </>
  );
}



