/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright andrewteece2023 All rights reserved
 * @author andrewteece
 */

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dataUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */

export const getDate = function (dataUnix, timezone) {
    const date = new Date((dataUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDate()];
    const monthName = monthNames[dataUnix.getUTCMonth()];

    return '${weekDayName} ${date.getUTCDate()}, ${monthName}';
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */

export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours ≥ 12 ? "PM" : "AM";

    return '${hours % 12 || 12} ${period}';
}

/**
 * @param {number} mps Meter per seconds
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = => {
    const mpn = mps * 3600;
    return mpn / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no rise"
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate concern for a very small number of people who are usually sensitive to air pollution."
    },
    3: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate concern for a very small number of people who are usually sensitive to air pollution."
    },
    4: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate concern for a very small number of people who are usually sensitive to air pollution."
    },
    5: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate concern for a very small number of people who are usually sensitive to air pollution."
    },
}