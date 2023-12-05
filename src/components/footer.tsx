import { Container, Group, ActionIcon, rem } from "@mantine/core";
import { IconBrandFacebook, IconBrandGithub } from "@tabler/icons-react";
import ScoutsLogo from "../assets/scouts-logo.png";

const Footer = () => (
  <div className="border-t mt-12">
    <Container className="flex justify-between items-center py-8">
      <img alt="Scout Logo" src={ScoutsLogo} width={100} />
      <Group gap={0} justify="flex-end" wrap="nowrap">
        <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandFacebook
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
        <a
          href="https://github.com/robinsonmax/scout-badge-generator"
          target="_blank"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </a>
      </Group>
    </Container>
  </div>
);

export default Footer;
