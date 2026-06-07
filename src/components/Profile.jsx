import Avatar from "./Avatar.jsx";

export default function Profile({ profile, mood }) {
  return (
    <header className="profile">
      <Avatar src={profile.avatar} initials={profile.initials} name={profile.name} />

      {/* Time-aware greeting — driven by the useTimeOfDay hook. */}
      <p className="profile__greeting">
        <span className="profile__greeting-emoji" aria-hidden="true">
          {mood.emoji}
        </span>
        {mood.greeting}, I'm
      </p>

      <h1 className="profile__name">{profile.name}</h1>
      <p className="profile__bio">{profile.bio}</p>

      <p className="profile__meta">
        <span>📍 {profile.location}</span>
        <span aria-hidden="true">•</span>
        {/* Live local clock, also from the hook. */}
        <span>🕒 {mood.clock} local</span>
      </p>
    </header>
  );
}
