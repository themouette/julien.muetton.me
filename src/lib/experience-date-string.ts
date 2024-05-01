import { formatDistanceStrict, format } from "date-fns";

const formatDate = (date: Date): string => {
  return format(date, "LLL yyyy");
};

export const experienceInterval = ({
  start,
  end,
}: {
  start: Date;
  end?: Date;
}): string => {
  if (!end) {
    return `${formatDate(start)} - Present`;
  }

  if (start.getFullYear() === end.getFullYear()) {
    return `${format(start, "LLL")} - ${formatDate(end)}`;
  }

  return `${formatDate(start)} - ${formatDate(end)}`;
};

export const experienceDuration = ({
  start,
  end,
}: {
  start: Date;
  end?: Date;
}): string => {
  if (!end) {
    return formatDistanceStrict(new Date(), start);
  }

  return formatDistanceStrict(end, start);
};

export const experienceDateString = ({
  start,
  end,
}: {
  start: Date;
  end?: Date;
}): string => {
  return `${experienceInterval({ start, end })} (${experienceDuration({
    start,
    end,
  })})`;
};
