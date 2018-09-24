class GitHub {
  constructor() {
    this.client_id = 'dae3f43cef813cdc42c7';
    this.client_secret = '60be22724b3cd89717411e4764648f71587ef944';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
