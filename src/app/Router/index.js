import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Layout from 'layout'

import Home from 'pages/Home'
import Pricing from 'pages/Pricing'
import Features from 'pages/Feature'
import Security from 'pages/Security'
import Blog from 'pages/Blog'
import BlogDetail from 'pages/BlogDetail'
import FAQ from 'pages/FAQ'

import AboutUs from 'pages/AboutUs'
import ContactUs from 'pages/ContactUs'
import SupportedBroker from 'pages/SupportedBroker'
import PrivacyPolicy from 'pages/PrivacyPolicy'

import Login from 'pages/Auth/Login'

// Sign Up
import SignUp from 'pages/Auth/SignUp'
import VerifyEmail from 'pages/Auth/SignUp/VerifyEmail'
import VerifySucces from 'pages/Auth/SignUp/VerifySucces'
import VerifyFailed from 'pages/Auth/SignUp/VerifyFailed'

// Reset Password
import ResetPassword from 'pages/Auth/ResetPassword'
import ResetPasswordVerifyEmail from 'pages/Auth/ResetPassword/VerifyEmail'
import NewPassword from 'pages/Auth/ResetPassword/NewPassword'
import ResetSucces from 'pages/Auth/ResetPassword/ResetSuccess'
import ConnectBroker from 'pages/Auth/ConnectBroker'
import FindBroker from 'pages/Auth/FindBroker'

import Page404 from 'pages/Page404'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>}/>
          <Route path="/security" element={<Security/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:blogId" element={<BlogDetail/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/supported-broker" element={<SupportedBroker/>}/>
          <Route path="/policy/:type" element={<PrivacyPolicy/>}/>

          <Route path="*" element={<Page404/>} />

        </Route>

        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/sign-up" element={<SignUp/>}/>
        <Route path="/auth/verify-email" element={<VerifyEmail/>}/>
        <Route path="/auth/verify-email/success" element={<VerifySucces/>}/>
        <Route path="/auth/verify-email/failed" element={<VerifyFailed/>}/>

        <Route path="/auth/reset-password" element={<ResetPassword/>}/>
        <Route path="/auth/reset-password/verify" element={<ResetPasswordVerifyEmail/>}/>
        <Route path="/auth/reset-password/new" element={<NewPassword/>}/>
        <Route path="/auth/reset-password/success" element={<ResetSucces/>}/>

        <Route path="/auth/connect-broker" element={<ConnectBroker/>}/>
        <Route path="/auth/find-broker" element={<FindBroker/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router
