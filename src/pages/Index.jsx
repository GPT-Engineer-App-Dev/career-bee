import { Container, Text, VStack, Heading, Box, Button, Stack, HStack, Icon } from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$120,000 - $140,000",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd.",
    location: "New York, NY",
    salary: "$110,000 - $130,000",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Designify",
    location: "Remote",
    salary: "$90,000 - $110,000",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        {jobListings.map((job) => (
          <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{job.title}</Heading>
            <Text mt={2}><Icon as={FaBriefcase} mr={2} />{job.company}</Text>
            <HStack mt={2} spacing={4}>
              <Text><Icon as={FaMapMarkerAlt} mr={2} />{job.location}</Text>
              <Text><Icon as={FaDollarSign} mr={2} />{job.salary}</Text>
            </HStack>
            <Stack direction="row" spacing={4} mt={4}>
              <Button colorScheme="teal" variant="solid">Apply Now</Button>
              <Button colorScheme="teal" variant="outline">Save</Button>
            </Stack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;