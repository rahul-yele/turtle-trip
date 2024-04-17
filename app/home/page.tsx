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
import Filter from "@/component/Filter/Filter";
import CalendarPage from "@/component/Calendar/CalendarPage";
import Budget from "@/component/Budget/Budget";

export default function Home() {
  const [data, setData] = useState<Response>()
  const [dictionary, setDictionary] = useState<Response>()
  const [loading, setLoading] = useState(false)
  const [showCard, setShowCard] = useState(true)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showBudget, setShowBudget] = useState(false)

  async function getData() {
    const { data }: any = await axiosInstance.get(API_ENDPOINT.FLIGHT_OFFER)
    setData(data)
    setDictionary(data?.dictionaries)
    setLoading(false)
    
  }
  


  const handleCalendarVisibility = () => {
    
    setShowCalendar(!showCalendar);
    setShowBudget(false);
  };
  
  const handleBudgetVisibility = () => {
  
    setShowBudget(!showBudget);
    setShowCalendar(false);
  };
  
  

  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <Searchbar getData={getData} setLoading={setLoading} />
        <Result />
      </div>
      
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.cardList}>
            <div className={styles.Filter}>{data && dictionary && <Filter  onCalendarClick={handleCalendarVisibility} onBudgetClick={handleBudgetVisibility} />}</div>
            {/* <div className={styles.content}>
              {
                showCard?
                data &&
                  dictionary &&
                  data.data.map((item, idx: number) => (
                    <Card
                      key={idx} // Added key prop
                      data={data?.data[idx]}
                      dictionary={dictionary}
                      className={`hover:bg-blue-100 focus:outline-none shadow-lg ${styles.sideCard}`}
                    />
                  )):<CalendarPage/> 
              }
              <Budget />
            </div> */}
            <div className={styles.content}>
                {(!showCalendar && !showBudget) ? (
                  data &&
                  dictionary &&
                  data.data.map((item, idx: number) => (
                    <Card
                      key={idx} // Added key prop
                      data={data?.data[idx]}
                      dictionary={dictionary}
                      className={`hover:bg-blue-100 focus:outline-none shadow-lg ${styles.sideCard}`}
                    />
                  ))
                ) : showCalendar? (
                  <CalendarPage />
                ) : showBudget ? (
                  <Budget />
                ) : "null"}
              </div>
          </div>
          
        )}
      </div>
    </>
  );
}