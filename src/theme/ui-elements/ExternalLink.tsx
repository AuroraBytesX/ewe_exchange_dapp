import React from "react";
import { HStack, Icon, Text, chakra } from "@/theme/ui-elements";
import { Tooltip } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@/theme/icons";

type Props = {
  label: string;
  href: string;
  color?: string;
};

const ExternalLink = ({ href, label, color = "primary.600" }: Props) => {
  return (
    <Tooltip label={href} hasArrow>
      <chakra.a href={href} target="_blank" rel="noopener noreferrer" display="inline-block">
        <HStack color={color}>
          <Text fontWeight={500}>{label}</Text>
          <Icon as={ExternalLinkIcon} boxSize={5} />
        </HStack>
      </chakra.a>
    </Tooltip>
  );
};

export default ExternalLink;
