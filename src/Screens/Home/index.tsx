import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import homeStyle from './style.home';
import axios from 'axios';

interface ISalmos {
  text: string;
  chapter: string;
  number: string;
}

const Home: React.FC = () => {
  const [salmos, setSalmos] = useState<ISalmos>();

  useEffect(() => {
    axios
      .get('https://www.abibliadigital.com.br/api/verses/nvi/sl/random', {
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlNhdCBEZWMgMDkgMjAyMyAxNjo0ODozNyBHTVQrMDAwMC5tYXJjb2NpbnRpYTIwMDBAZ21haWwuY29tIiwiaWF0IjoxNzAyMTQwNTE3fQ.dwQtoYw1yMHJko-2LonCPnASvS3ntguD3wxOd8c8ojE',
        },
      })
      .then(({data}) => {
        setSalmos({
          chapter: data.chapter,
          text: data.text,
          number: data.number,
        });
      })
      .catch(error => {
        console.log(error);
        setSalmos({
          chapter: '',
          text: '',
          number: '',
        });
      });
  }, []);

  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.salmoContainer}>
        <Text style={homeStyle.title}>Salmo do Dia</Text>
        {salmos?.text ? (
          <>
            <Text
              style={
                homeStyle.text
              }>{`${salmos?.text} Salmos ${salmos?.chapter}:${salmos?.number}`}</Text>
          </>
        ) : (
          <Text style={homeStyle.text}>Limite de requisições atingido</Text>
        )}
      </View>

      <View style={homeStyle.wmb}>
        <Text style={homeStyle.title}>William Branham</Text>
        <ScrollView>
          <Text style={homeStyle.text}>
            William Branham (nós o chamamos de irmão Branham) começou sua vida
            na primavera de 1909. Ele nasceu em uma das mais pobres famílias, em
            plena serra do sul de Kentucky. Poucos minutos depois do seu
            nascimento, em uma pequena cabana de um cômodo, uma estranha Luz
            entrou no quarto e pairou sobre a cama onde ele estava deitado. Era
            o início de uma vida sobrenatural que iria mudar a face do moderno
            mundo cristão.
          </Text>
          <Text style={homeStyle.text}>
            Com um pai alcoólatra e pouca ou nenhuma religião em casa, ele não
            teve muita chance. No entanto, contra todas as probabilidades, o
            irmão Branham cresceu tornando-se um poderoso homem de Deus. Com
            cerca de 38 anos, ele estava orando em uma pequena cabana de caça
            com armadilhas ao norte de sua casa em Jeffersonville, Indiana. Foi
            então que tarde da noite o Anjo do Senhor o visitou e lhe deu a
            comissão para orar pelos enfermos.
          </Text>
          <Text style={homeStyle.text}>
            Entre outras coisas, o Anjo lhe disse: “Se conseguires que as
            pessoas creiam em ti, e fores sincero quando orares, nada resistirá
            diante de suas orações, nem mesmo o câncer.”
          </Text>
          <Text style={homeStyle.text}>
            Todas as dúvidas se foram. O irmão Branham tinha agora sua comissão
            e corajosamente deu um passo adiante. Um reavivamento mundial de
            cura tinha começado.
          </Text>
          <Text style={homeStyle.text}>
            O ministério do irmão Branham marcou o maior derramamento do
            Espírito Santo desde o dia de Pentecostes. Centenas de milhares
            participaram das campanhas Branham. Milhares foram curados em Nome
            do Senhor Jesus Cristo. Outros, como os evangelistas Oral Roberts,
            T. L. Osborn e A. A. Allen, logo seguiram o irmão Branham e
            começaram seus próprios reavivamentos de cura. O Senhor fez chover
            suas bênçãos como nunca antes. A mão de cura de Jesus Cristo tinha
            mais uma vez tocado o Seu povo.
          </Text>
          <Text style={homeStyle.text}>
            O ministério do irmão Branham não teve igual. Ele provou que Jesus
            Cristo está tão vivo hoje como quando andou nas praias da Galileia.
            Como o apóstolo Paulo, o irmão Branham mostrou que o Evangelho não
            consiste somente de palavras, mas também de virtude! A revelação dos
            mistérios ocultos e o poder manifestado de Deus tinham se juntado em
            um ministério muito especial. De modo notável, como os escribas
            registraram os sermões dos profetas bíblicos, seus sermões foram
            registrados em fita magnética. Hoje, nós prezamos essas gravações.
          </Text>
          <Text style={homeStyle.text}>
            O irmão Branham faleceu em consequência de um trágico acidente de
            carro em dezembro de 1965. Deus levou Seu servo para casa, mas nos
            deixou com essas gravações preciosas que são tão estimadas ao nosso
            coração
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
