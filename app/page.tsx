"use client";

import React, { useEffect, useState } from "react";
import { DefaultApp } from "@/modules/default";
import {
  Box,
  Button,
  Text,
  Center,
  Progress,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import components that use client-side only features
const FloatingThemeToggle = dynamic(() => import('./components/FloatingThemeToggle'), {
  ssr: false
});

const FloatingLiveTime = dynamic(() => import('./components/FloatingLiveTime'), {
  ssr: false
});

// 🥠 Fortune Cookie (Not fixed, center of layout)
const FortuneCookie = () => {
  const [message, setMessage] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [breaking, setBreaking] = useState(false);

  const fortunes = [
    "📈 Your AURA is rising.",
    "🧠 Brainrot is temporary, AURA is forever.",
    "🌐 You are 1 swap away from greatness.",
    "🚀 Airdrop karma is coming your way.",
    "💰 You hodl like a true degenerate. Respect.",
  ];

  const crackCookie = () => {
    setBreaking(true);
    setShowMsg(false);
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setTimeout(() => {
      setMessage(random);
      setShowMsg(true);
      setBreaking(false);
    }, 700);
  };

  return (
    <Center mt={10} flexDir="column">
      <motion.div
        animate={
          breaking
            ? { rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.2, 0.9, 1] }
            : {}
        }
        transition={{ duration: 0.7 }}
      >
        <Button colorScheme="orange" onClick={crackCookie}>
          🍪 Crack Fortune Cookie
        </Button>
      </motion.div>
      {showMsg && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Text
            mt={3}
            px={4}
            py={2}
            bg="yellow.100"
            _dark={{ bg: "yellow.300" }}
            borderRadius="md"
            fontSize="sm"
            maxW="300px"
            textAlign="center"
          >
            {message}
          </Text>
        </motion.div>
      )}
    </Center>
  );
};

// 🧠 Brainrot Meter
const BrainrotMeter = () => {
  const [show, setShow] = useState(false);
  const [level, setLevel] = useState(0);

  const handleReveal = () => {
    setShow(true);
    setLevel(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <Center mt={10} flexDir="column">
      <Button colorScheme="pink" onClick={handleReveal}>
        🧠 Check Brainrot Level
      </Button>
      {show && (
        <Box mt={3} textAlign="center">
          <Text fontWeight="bold">Brainrot Level: {level}</Text>
          <Progress
            value={level}
            max={100}
            w="250px"
            size="md"
            colorScheme="pink"
            mt={2}
            borderRadius="md"
            hasStripe
            isAnimated
          />
          <Text fontSize="sm" mt={1} color="gray.500">
            {level < 30
              ? "😶 Mild brainrot"
              : level < 70
              ? "😵‍💫 Brain buzzin'"
              : "🧨 MAXIMUM ROT"}
          </Text>
        </Box>
      )}
    </Center>
  );
};

// 💥 AURA Insanity Toggle (Animated)
const InsanityToggle = () => {
  const [on, setOn] = useState(false);

  return (
    <Center mt={10} flexDir="column">
      <Button
        colorScheme="red"
        onClick={() => setOn(!on)}
        as={motion.button}
        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: [0, -2, 2, -1, 1, 0], transition: { duration: 0.4 } }}
      >
        {on ? "😌 Sanity Restored" : "💥 Activate AURA Insanity"}
      </Button>
      {on && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Text mt={3} fontWeight="bold" color="red.400">
            🧬 CHAOS MODE ENABLED – brace for brainrot.
          </Text>
        </motion.div>
      )}
    </Center>
  );
};

// ✅ Final Page Component
const Page = () => {
  return (
    <>
      <DefaultApp />
      <FloatingThemeToggle />
      <FloatingLiveTime />
      <FortuneCookie />
      <BrainrotMeter />
      <InsanityToggle />
    </>
  );
};

export default Page;