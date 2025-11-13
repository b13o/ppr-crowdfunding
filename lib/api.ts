import { Project } from "./types";

const API_URL = "http://localhost:3001";

// プロジェクト一覧を取得する API
export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) throw new Error("Failed to fetch projects");
  return response.json();
}

// プロジェクト詳細を取得する API
export async function fetchProjectById(id: string): Promise<Project> {
  const response = await fetch(`${API_URL}/projects/${id}`);
  if (!response.ok) throw new Error("Failed to fetch project");
  return response.json();
}
