# Feeld-Style QA Demo App

This is a lightweight React Native demo application built to support and showcase
mobile QA automation and testing skills using a real, testable app.

The app is intentionally minimal in UI, but realistic in structure and behavior,
mirroring common flows found in dating-style applications (e.g. Feeld).

---

## Automation Testing

End-to-end automation tests for this application are implemented in a separate repository:

https://github.com/SpataruMihaela/feeld-qa-automation

The automation suite uses Appium + WebdriverIO to validate critical user journeys
on Android devices.


## Purpose

This project was created to:

- Demonstrate mobile E2E testing with a real application  
- Support Appium / WebdriverIO automation  
- Provide stable, deterministic user flows  
- Showcase clean React Native architecture  
- Enable reliable selector-based testing (`testID`, accessibility labels)  

---

## Features

- Welcome screen with user avatar  
- Discovery flow with profile cards  
- Like / Unlike profiles  
- My Profile screen  
- Edit Profile (update user name)  
- Settings screen  
- Image picker support (camera / gallery)  
- E2E-safe image mocking via environment flag  
- Global state management using React Context  

---

## Tech Stack

- React Native  
- Expo  
- TypeScript  
- React Navigation (Native Stack)  
- Context API  
- Appium + WebdriverIO (E2E automation)  

---

## Project Structure

```
src/
├── screens/        # App screens
├── navigation/     # Navigation setup
├── context/        # Global state (User, Profile, Likes)
├── styles/         # Theme and shared styles
├── assets/         # Images
└── config/         # Environment configuration
```

---

## Running the App

### Prerequisites

Ensure the following are installed:

- Node.js (LTS recommended)  
- Expo CLI  
- Android Studio  

> ⚠️ Android Studio must be **opened** and an **Android Emulator (AVD)** must be running before launching the app.

---

### Install & Launch

Install dependencies:

```bash
npm install
```

Start the Expo server and run the app on Android:

```bash
npx expo start -c
npx expo run:android
```

After Expo starts, you can also press `a` in the terminal to launch the app on the connected Android emulator.
