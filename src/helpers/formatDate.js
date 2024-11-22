export const formatDate = (dateString) => {
  if (!dateString) return "-";

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedDate} ${formattedTime} WIB`;
};
