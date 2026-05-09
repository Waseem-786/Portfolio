import ProjectLayout from "../../components/ProjectLayout";
import { FaJava, FaMusic } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export default function MusicPlayerProject() {
  return (
    <ProjectLayout
      title="Music Player"
      tagline="A Java JSwing music player with playlist management and metadata"
      description="A desktop music player with real-time metadata extraction, playlist management, and recent-song tracking — backed by MySQL for persistence."
      tags={["Java", "JSwing", "MySQL"]}
      hero={{ image: "/MusicPlayer/HomePage.jpg" }}
      github="https://github.com/Waseem-786/Music_Player"
      demoVideo="/MusicPlayer/MusicPlayerVideo.mp4"
      overview={{
        problem:
          "Many existing music players lack an efficient way to organize and retrieve playlists dynamically. Users often face cluttered interfaces, metadata retrieval issues, and inefficient database handling.",
        solution: {
          bullets: [
            "Real-time metadata extraction for songs",
            "Seamless MP3 playback and playlist management",
            "Recent-song tracking for quick access",
            "Java Swing UI tuned for smooth interactions",
            "Efficient database handling with MySQL",
          ],
        },
      }}
      techStack={[
        { name: "Java", icon: <FaJava /> },
        { name: "JSwing", icon: <FaMusic /> },
        { name: "MySQL", icon: <SiMysql /> },
      ]}
      externalLibraries={[
        { name: "jaudiotagger 2.2.6", description: "Reads ID3 / metadata from audio files for the player UI." },
        { name: "jl 1.0.1", description: "MP3 playback support inside the JSwing application." },
        { name: "mysql-connector-j 8.0.31", description: "JDBC driver used to talk to the MySQL database." },
      ]}
      features={[
        {
          title: "Home Page",
          description: "Surfaces the last five played songs and provides quick navigation to the music and playlist pages.",
          image: "/MusicPlayer/HomePage.jpg",
        },
        {
          title: "Music Page",
          description: "Search, sort, and play music seamlessly — with real-time metadata display alongside each track.",
          image: "/MusicPlayer/MusicPage.jpg",
        },
        {
          title: "Playlist Page",
          description: "Create, manage, and play songs from different playlists dynamically, with persistent storage.",
          image: "/MusicPlayer/PlaylistPage.jpg",
        },
      ]}
      diagrams={{
        title: "Project Workflow",
        description: "High-level flow diagrams illustrating the player's core navigation and playlist behaviors.",
        images: [
          "/MusicPlayer/Basic Flow.png",
          "/MusicPlayer/Home.png",
          "/MusicPlayer/Music.png",
          "/MusicPlayer/Playlist.png",
        ],
      }}
    />
  );
}