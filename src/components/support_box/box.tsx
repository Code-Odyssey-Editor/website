import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const animals = [
  {
    value: "dog",
    label: "Dog",
  },
  {
    value: "cat",
    label: "Cat",
  }
];

export default function Box() {
  return (
    <div className="mx-auto my-8 xl:my-32 text-center justify-center dark:bg-gray-900 dark:text-white border border-gray-600/30 w-1/2 rounded-3xl">
      <h1 className="text-5xl font-serif text-gray-600 dark:text-gray-50 pt-8">
        CONTACT SUPPORT
      </h1>
      <p className="text-md font-light font-serif italic">
        How can we help you?
      </p>

      <div className="grid grid-cols-2 gap-8 m-8 grid-rows-2">
        <Input type="text" variant="underlined" label="First Name" />
        <Input type="text" variant="underlined" label="Last Name" />
        <Input type="text" variant="underlined" label="Email" />
        <Input type="text" variant="underlined" label="Phone Number" />
      </div>

      {/* Select */}
      <div className="w-full p-8">
        <Select size={"lg"} label="Select an issue" className="w-full" variant="underlined">
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value} className="text-black">
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Description */}
      <div className="p-8 w-full">
        <Textarea
          variant="bordered"
          placeholder="Let us know what you need help with..."
          className="w-full rounded-3xl"
          size="lg"
        />
      </div>

      {/* Get in touch Button */}
      <div className="mb-16 mt-16 mx-8 relative text-center justify-center">
        <hr className="border-gray-300 border-2 rounded-full" />
        <div className="absolute -top-8 w-full">
          <Button
            className="rounded-full bg-purple-500 text-white font-sans p-8 text-2xl font-light"
            size="lg"
            variant="flat"
            color="secondary"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
