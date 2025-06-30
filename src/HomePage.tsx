import React, { useState } from "react";
import Container from "./Container";
import Text from "./Text";
import Input from "./Input";
import Divider from "./Divider";
import Button from "./Button";
// imagens
import LOGO_WHITE from "./assets/logo_light.svg";
import TEAM_A from "./assets/Japan_national_football_team_crest.svg";
import TEAM_B from "./assets/Manchester_City_2016.svg";
import CircleImage from "./CircleImage";
import Grid from "./Grid";
import IconButton from "./IconButton";
import { FiBell, FiCalendar, FiCpu, FiSearch, FiStar } from "react-icons/fi";
import Game from "./Game";

export default function HomePage() {
  return (
    <Container padding>
      <div className="bg-gray-800 w-full">
        <div className="flex align-center justify-between p-4">
          <Text>Futebol</Text>
          <div className="flex align-center gap-2">
            <button className="text-white bg-green-400 px-5 rounded-full">
              live
            </button>
            <IconButton
              icon={<FiCalendar className="w-5 h-5" />}
              size="md"
              variant="ghost"
            />
            <IconButton
              icon={<FiSearch className="w-5 h-5 " />}
              size="md"
              variant="ghost"
            />
          </div>
        </div>
      </div>
      <div className="py-2"></div>
      <Game />
      <Game />
      <Game />
      <Game />
    </Container>
  );
}
