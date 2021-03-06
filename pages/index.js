import React from 'react'
import StoryblokService from '../utils/storyblok-service'
import Head from '../components/Head'
import CircleButton, { IconOptions } from '../components/CircleButton'
import SbBook from '../components/SbComponents/SbBook'
import SbArticle from '../components/SbComponents/SbArticle'

const Schema = {
  Settings: {
    Title: 'Title',
    Subtitle: 'Subtitle',
    Introduction: 'Introduction',
    BackgroundImage: 'Background_Image',
    Twitter: 'Twitter',
    LinkedIn: 'LinkedIn',
    Email: 'Email'
  }
}

const Index = ({ settings, books, archives }) => {
  const { Twitter, LinkedIn, Email } = settings
  return (
    <>
      <Head content={settings} />
      <main className="home">
        <img
          className="home__bg"
          src={settings[Schema.Settings.BackgroundImage]}
        />
        <div className="container">
          <div className="home__ContentColumn">
            <div className="home__ContentColumn__MarginGap" />
            <h1 className="animate__animated animate__fadeInUp">
              {settings[Schema.Settings.Title]}
            </h1>
            <h3 className="animate__animated animate__fadeInUp animate__delay-2s">
              {settings[Schema.Settings.Subtitle]}
            </h3>
            <p className="home__ContentColumn__Description animate__animated animate__fadeInUp animate__delay-3s">
              {settings[Schema.Settings.Introduction]}
            </p>
            <div className="home__ContentColumn__Actions animate__animated animate__fadeInUp animate__delay-4s">
              {LinkedIn && LinkedIn.cached_url.length > 0 ? (
                <CircleButton
                  iconOption={IconOptions.LinkedIn}
                  url={LinkedIn.cached_url}
                />
              ) : (
                ''
              )}
              {Twitter && Twitter.cached_url.length > 0 ? (
                <CircleButton
                  iconOption={IconOptions.Twitter}
                  url={Twitter.cached_url}
                />
              ) : (
                ''
              )}
              {Email && Email.email.length > 0 ? (
                <CircleButton
                  iconOption={IconOptions.Email}
                  url={`mailto:${Email.email}`}
                />
              ) : (
                ''
              )}
            </div>
            {/* Begin Authored By */}
            <div className="animate__animated animate__fadeInUp animate__delay-4s">
              <h3>Authored By Stanley</h3>
              <hr />
            </div>
            {books.map((storyBlok, index) => {
              return <SbBook key={index} blok={storyBlok} />
            })}
            {/* Begin Archives */}
            <div className="home__ContentColumn__SectionGap" />
            <div className="animate__animated animate__fadeInUp animate__delay-5s">
              <h3>Archive</h3>
              <hr />
            </div>
            {archives.map((storyBlok, index) => {
              return <SbArticle key={index} blok={storyBlok} />
            })}
            <div className="home__ContentColumn__MarginGap" />
          </div>
        </div>
        {StoryblokService.bridge()}
        {/* Async CSS font load */}
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link rel="preload" href="/fonts/all.css" as="style" onload="this.onload = null; this.rel = \'stylesheet\';"/><noscript><link rel="stylesheet" href="/fonts/all.css" /></noscript>'
          }}></div>
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  let [settings, books, archives] = await Promise.all([
    StoryblokService.get(`cdn/stories/settings`),
    StoryblokService.get('cdn/stories', {
      starts_with: 'book/'
    }),
    StoryblokService.get('cdn/stories', {
      starts_with: 'archives/'
    })
  ])
  return {
    props: {
      settings: settings.data.story.content,
      books: books.data.stories,
      archives: archives.data.stories
    } // will be passed to the page component as props
  }
}

export default Index
