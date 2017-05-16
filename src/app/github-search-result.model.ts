import { IGitHubRepository } from 'app/github-repository.model';

export interface IGitHubSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: IGitHubRepository[];
}
