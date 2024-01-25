// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    res.status(200).json({ ...response });
  } catch (error) {
    res.status(400).json({ status: "Failed", message: "Error" });
  }
  // res.status(200).json({ name: 'John Doe' })
}