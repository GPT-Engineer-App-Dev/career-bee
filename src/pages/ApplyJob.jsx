import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const ApplyJob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { name, email, resume, coverLetter, jobTitle: job.title };
    const existingApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    localStorage.setItem("jobApplications", JSON.stringify([...existingApplications, newApplication]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="2xl" textAlign="center">
          Apply for {job.title}
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="resume" isRequired>
          <FormLabel>Resume</FormLabel>
          <Input type="file" onChange={(e) => setResume(e.target.files[0])} />
        </FormControl>
        <FormControl id="coverLetter" isRequired>
          <FormLabel>Cover Letter</FormLabel>
          <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Submit Application
        </Button>
      </VStack>
    </Container>
  );
};

export default ApplyJob;