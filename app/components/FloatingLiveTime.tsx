"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// ⏰ Live Time (Floating)
const FloatingLiveTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      position="fixed"
      bottom="30px"
      right="20px"
      bg="gray.100"
      _dark={{ bg: "gray.700" }}
      px={3}
      py={1}
      borderRadius="md"
      fontSize="sm"
      zIndex={999}
    >
      🕒 {time}
    </Box>
  );
};

export default FloatingLiveTime;