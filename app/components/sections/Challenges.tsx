import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ChallengeCard from "./ChallengeCard";
import {
  IllustrationCompetitors,
  IllustrationReferrals,
  IllustrationMarketing,
  IllustrationMoney,
} from "./ChallengeIllustrations";

const challenges = [
  {
    text: "Está perdendo espaço para concorrentes que dominam os canais digitais",
    Illustration: IllustrationCompetitors,
  },
  {
    text: "Depende apenas de indicações para conseguir novos clientes",
    Illustration: IllustrationReferrals,
  },
  {
    text: "Investe em vários canais sem saber o que realmente gera receita",
    Illustration: IllustrationMarketing,
  },
  {
    text: "As vendas estagnaram e o crescimento deixou de ser previsível",
    Illustration: IllustrationMoney,
  },
];

export default function Challenges() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle className="mx-auto max-w-[760px]">
          Você se identifica com algum desses desafios?
        </SectionTitle>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map(({ text, Illustration }, i) => (
            <ChallengeCard key={i} index={i} text={text}>
              <Illustration />
            </ChallengeCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
