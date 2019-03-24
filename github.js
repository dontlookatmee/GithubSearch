class GitHub {
  constructor() {
    this.client_id = '85f2d3cf3c4335f4854f';
    this.client_secret = '1c43778bf55397dd0e1994fa948c4fa08e056eb6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}