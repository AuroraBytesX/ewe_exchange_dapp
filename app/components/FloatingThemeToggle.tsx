"use client";

import { Box, Button, useColorMode } from "@chakra-ui/react";

// 🌗 Dark/Light Mode Toggle (Floating)
const FloatingThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position="fixed" bottom="70px" right="20px" zIndex={999}>
      <Button size="sm" onClick={toggleColorMode}>
        {colorMode === "light" ? "🌙 Dark" : "☀️ Light"}
      </Button>
    </Box>
  );
};

export default FloatingThemeToggle;