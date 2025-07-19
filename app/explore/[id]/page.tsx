"use client"
import React from 'react'
import { Suspense } from "react";
import HouseDetails from './HouseDetails';

function AppartmentId() {
  return (
    <Suspense fallback={<div className="mt-20 text-center">Loading...</div>}>
      <HouseDetails />
    </Suspense>
  )
}

export default AppartmentId
