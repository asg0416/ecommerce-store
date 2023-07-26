import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboard("57583e8e-3225-48fb-8d2a-2ab8d6030739");
  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
