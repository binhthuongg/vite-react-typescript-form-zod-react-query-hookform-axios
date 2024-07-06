import moment, { Moment } from "moment";

export const VIETNAM_GMT = 7;

export const getDefaultGmt = () => {
  return VIETNAM_GMT;
};

export const DATE_FORMAT = {
  DDMMYYY: "DD/MM/YYYY",
  DDMMYY_HHmm: "DD/MM/YYYY HH:mm",
  HHmm_DDMMYYYY: "HH:mm DD/MM/YYYY",
  DDMM: "DD/MM",
  fullDate: "DD/MM/YY HH:mm",
  YYYYMMDD: "YYYY-MM-DD",
  MMYYYY: "MM/YYYY",
  DD_MM_YYYY: "DD-MM-YYYY",
  YYYY_MM_DD: "YYYY-MM-DD",
  DD_MM_YY_HHmm: "DD-MM-YYYY HH:mm",
  DD_MM_YY_HHmmss: "DD-MM-YYYY HH:mm:ss",
  HH_MM_SS: "HH:mm:ss",
  HH_mm: "HH:mm",
  MM_DD_YYYY: "MM-DD-YYYY",
  ISO: "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
  YYYY_MM_DD_HHmmssZ: "YYYY-MM-DDTHH:mm:ss[Z]",
  YYYYMMDDNoSpace: "YYYYMMDD",
};

export const ConvertUtcToLocalDate = (
  date?: Date | string | number | null,
  format?: string
) => {
  if (date != null) {
    let localDate = moment.utc(date).toDate();
    let dateFormat = moment(localDate).format(
      format ? format : DATE_FORMAT.fullDate
    );
    return dateFormat;
  }
  return "";
};

export const ConvertTimestampToDate = (
  date?: string | number | null,
  format?: string
) => {
  if (date != null) {
    let dateTimestamp = Number(date);
    return moment(new Date(dateTimestamp * 1000)).format(
      format ? format : DATE_FORMAT.fullDate
    );
  }
  return "";
};

export const getDateFromNow = (
  distance: number,
  unit: "day" | "month" | "week"
): Moment => {
  return moment().subtract(distance, unit);
};

export const ConvertDateToUtc = (date: Date | string | number | Moment) => {
  return moment(date).utc().format();
};

export const checkFixedDate = (from: any, to: any) => {
  let fixedDate = null;
  let formattedFrom = moment(from).format(DATE_FORMAT.DDMMYYY);
  let formattedTo = moment(to).format(DATE_FORMAT.DDMMYYY);
  type CheckDateType = {
    distance: number;
    unit: "day" | "week" | "month";
    display: any;
  };

  let checkDates: Array<CheckDateType> = [
    {
      distance: 0,
      unit: "day",
      display: "Hôm nay",
    },
    {
      distance: 1,
      unit: "day",
      display: "Hôm qua",
    },
    {
      distance: 0,
      unit: "week",
      display: "Tuần này",
    },
    {
      distance: 1,
      unit: "week",
      display: "Tuần trước",
    },
    {
      distance: 0,
      unit: "month",
      display: "Tháng này",
    },
    {
      distance: 1,
      unit: "month",
      display: "Tháng trước",
    },
  ];
  for (let i = 0; i < checkDates.length; i++) {
    const checkDate = checkDates[i],
      { distance, unit, display } = checkDate;
    let searchUnit: any = unit;
    if (searchUnit === "week") searchUnit = "isoWeek";

    let dateFrom = getDateFromNow(distance, unit),
      dateTo = getDateFromNow(distance, unit);
    if (
      from === dateFrom.startOf(searchUnit).utc().format() &&
      to === dateTo.endOf(searchUnit).utc().format()
    ) {
      if (unit === "day") fixedDate = `${display} (${formattedFrom})`;
      else fixedDate = `${display} (${formattedFrom} - ${formattedTo})`;
      return fixedDate;
    }
  }
};

export const getStartOfDay = (date: Date | string | number | Moment) => {
  return (
    moment(date).startOf("day").format(`YYYY-MM-DDTHH:mm:ss`).toString() + "Z"
  );
};
export const getEndOfDay = (date: Date | string | number | Moment) => {
  return (
    moment(date).endOf("day").format(`YYYY-MM-DDTHH:mm:ss`).toString() + "Z"
  );
};

export const convertDateToStartOfDayISOFormat = (
  date: Date | string | number | Moment
) => {
  return moment(date).startOf("day").utc().format("YYYY-MM-DDTHH:mm:ss[Z]");
};
export const convertDateToEndOfDayISOFormat = (
  date: Date | string | number | Moment
) => {
  return moment(date).endOf("day").utc().format("YYYY-MM-DDTHH:mm:ss[Z]");
};

export const getStartOfDayCommon = (date: Date | string | number | Moment) => {
  if (!date) return;
  return moment(date, DATE_FORMAT.DDMMYYY).startOf("day").utc(true);
};
export const getEndOfDayCommon = (date: Date | string | number | Moment) => {
  if (!date) return;
  return moment(date, DATE_FORMAT.DDMMYYY).endOf("day").utc(true);
};

export const formatDateFilter = (
  date: Date | string | number | Moment | undefined
) => {
  if (!date) return;
  return moment(date).utc(false);
};

export const formatDateFilterUtc = (
  date: Date | string | number | Moment | undefined
) => {
  if (!date) return;
  return moment(date).utc(true);
};

export const formatDateTimeFilter = (
  date: Date | string | number | Moment | undefined,
  format: string = ""
) => {
  if (!date) return;
  return format !== ""
    ? moment(date, format).utc(true)
    : moment(date).utc(true);
};

export const formatDateCommon = (date: Date | string, format?: string) => {
  if (!date) return;
  return moment(date).format(format);
};

export const splitDateRange = (dateRange: any) => {
  if (!dateRange) return { start: undefined, end: undefined };
  const splitDate = dateRange.split(" ~ ");
  const start = splitDate[0] || undefined;
  const end = splitDate[1] || undefined;
  return { start, end };
};

export const changeFormatDay = (date: any) => {
  if (!date) return;
  const convertFormatDayStart = date.split("-").reverse();
  const restDayStart = convertFormatDayStart.slice(1);
  const getFirstElementDay = convertFormatDayStart.shift();
  const startDayAfterChangeFormat = restDayStart
    .concat(getFirstElementDay)
    .join("-");
  return startDayAfterChangeFormat;
};
const convertStartDateToTimestamp = (date: any) => {
  const myDate = date.split("/");
  let newDate = myDate[1] + "." + myDate[0] + "." + myDate[2] + " 00:00:00";
  return moment(new Date(newDate)).unix();
};
const convertEndDateToTimestamp = (date: any) => {
  const myDate = date.split("/");
  const today = new Date();
  let time = "23:59:59";

  if (
    Number(myDate[0]) === Number(today.getDate()) &&
    Number(myDate[1]) === Number(today.getMonth()) + 1 &&
    Number(myDate[2]) === Number(today.getFullYear())
  ) {
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  }

  const newDate = myDate[1] + "." + myDate[0] + "." + myDate[2];
  const dateTime = newDate + " " + time;
  return moment(new Date(dateTime)).unix();
};
export { convertStartDateToTimestamp, convertEndDateToTimestamp };

export const promotionDateFormatRequest = (
  value: string | null | undefined
) => {
  return value ? moment(value).utc().format("YYYY-MM-DDTHH:mm:ss[Z]") : null;
};

export const convertUtcTimeToLocalTime = (
  utcTime: string,
  utcTimeFormat: string,
  localTimeFormat?: string
) => {
  // Tạo đối tượng Moment từ thời gian UTC
  const utcMomentTime = moment.utc(utcTime, utcTimeFormat);

  // Thêm offset cho múi giờ Việt Nam (UTC+7)
  const vietNamMomentTime = utcMomentTime.clone().add(7, "hours");

  // Format theo định dạng mong muốn (formatLocal)
  return vietNamMomentTime.format(localTimeFormat || DATE_FORMAT.HH_MM_SS);
};

/**
 * convert date theo giờ utc
 */
export const convertLocalToUTCDate = (date: Date) => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
};

/**
 * convert utc date sang local theo timeZone Gmt
 */
export const updateConvertUTCToLocalDate = (
  dateString?: Date | string | null,
  /**
   * date format của kết quả trả ra
   */
  resultDateFormat?: string,
  /**
   * có sử dụng setting time zone của máy tính user không
   */
  isUseUserComputerTimeZone: boolean = false,
  /**
   * timeZone GMT, mặc định là Việt Name (GMT+7)
   */
  timeZoneGMT?: number
) => {
  if (!dateString) {
    return null;
  }
  if (isUseUserComputerTimeZone) {
    return moment(dateString).format(resultDateFormat || DATE_FORMAT.fullDate);
  }
  let resultDate = convertLocalToUTCDate(moment(dateString).toDate());
  return moment(resultDate)
    .add(timeZoneGMT || getDefaultGmt(), "hours")
    .format(resultDateFormat || DATE_FORMAT.fullDate);
};

/**
 * convert local date sang utc date theo timeZone Gmt
 */
export const updateConvertLocalDateToUTC = (
  dateString?: Date | string | null | Moment,
  /**
   * date format của kết quả trả ra
   */
  resultDateFormat?: string,
  /**
   * có sử dụng setting time zone của máy tính user không
   */
  isUseUserComputerTimeZone: boolean = false,
  /**
   * timeZone GMT, mặc định là Việt Name (GMT+7)
   */
  timeZoneGMT?: number
) => {
  if (!dateString) {
    return "";
  }
  console.log("dateString", dateString);
  if (isUseUserComputerTimeZone) {
    return moment(dateString).format(resultDateFormat || DATE_FORMAT.fullDate);
  }
  let resultDate = moment(
    convertLocalToUTCDate(moment(dateString).toDate())
  ).format(resultDateFormat);
  console.log("resultDate", resultDate);
  return moment(resultDate)
    .subtract(timeZoneGMT || getDefaultGmt(), "hours")
    .format(resultDateFormat || DATE_FORMAT.fullDate);
};
