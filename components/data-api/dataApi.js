import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

const STORAGE_KEY = "@_to_do_data";
export const _storeData = (data) => {
    try {
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.log("Error is saving data", error);
    }
}
export const _retrieveData = () => {
    try {
        return AsyncStorage.getItem(STORAGE_KEY);
    } catch (error) {
        console.log("Error in fetching data", error);
    }
}
export const _deleteData = () => {
    try {
        AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.log("Error in fetching data", error);
    }
}