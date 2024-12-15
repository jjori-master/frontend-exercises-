export default async function Page({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;
  console.log('q is ', q);
  return <div>Search Page</div>;
}
