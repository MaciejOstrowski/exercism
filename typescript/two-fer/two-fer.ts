class TwoFer {
  public static twoFer(name: string | void): string {
    return `One for ${name || 'you'}, one for me.`
  }
}

export default TwoFer
