import { Container, Text, VStack, Heading, Box, Button, Stack, HStack, Icon } from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const Index = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(jobs);
  }, []);

  const navigate = useNavigate();

  const handleApplyNow = (job) => {
    navigate("/apply-job", { state: { job } });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Job Listings
        </Heading>
        <Button as={Link} to="/post-job" colorScheme="teal" variant="solid">
          Post a Job
        </Button>
        {jobListings.map((job, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading fontSize="xl">{job.title}</Heading>
            <Text mt={2}><Icon as={FaBriefcase} mr={2} />{job.company}</Text>
            <HStack mt={2} spacing={4}>
              <Text><Icon as={FaMapMarkerAlt} mr={2} />{job.location}</Text>
              <Text><Icon as={FaDollarSign} mr={2} />{job.salary}</Text>
            </HStack>
            <Stack direction="row" spacing={4} mt={4}>
              <Button colorScheme="teal" variant="solid" onClick={() => handleApplyNow(job)}>Apply Now</Button>
              <Button colorScheme="teal" variant="outline">Save</Button>
            </Stack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;