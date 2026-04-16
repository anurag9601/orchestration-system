import DockerRequirement from "../DockerRequirement/DockerRequirement";


interface I {
  success: boolean;
  message?: string;
  error?: string;
  version?: string;
}

async function checkDockerStatus() {
  const request = await fetch(`${process.env.WEBSITE_URL}/api/docker/connect`, {
    cache: "no-store",
  });

  const response = await request.json();

  console.log("response", response);

  return response as I;
}

export default async function DockerHealthCheck() {
  const data: I = await checkDockerStatus();

  return <>{
    data.success === false && <DockerRequirement />
  }</>;
}
