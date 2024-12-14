import { Button, Input, Heading, Alert } from "@smitch/fluid";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <Button background="info" color="light">
        Click me eeeeee
      </Button>
      <Input placeholder="some placeholder" className="border border-warning" />
      <Heading level={1} align="right" transform="uppercase" weight="light">
        heading test
      </Heading>
      <Heading level={2} align="right" weight="bold" transform="capitalize">
        heading
      </Heading>
      <Alert
        status="info"
        title="Alert Title test"
        message="<p>This is an <strong>important</strong> message for the user.</p>"
        layout="default"
      />
    </div>
  );
}
