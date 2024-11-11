-- CreateEnum
CREATE TYPE "InteractedOn" AS ENUM ('undefined', 'blog', 'comment');

-- CreateEnum
CREATE TYPE "InteractionType" AS ENUM ('undefined', 'like', 'comment');

-- CreateTable
CREATE TABLE "blogs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interactions" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "type" "InteractionType" NOT NULL,
    "interactedOn" "InteractedOn" NOT NULL,
    "content" TEXT,
    "interactedCommentId" INTEGER,
    "blogId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "interactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "fullName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "roles" TEXT[] DEFAULT ARRAY['user']::TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SLUG_IDX" ON "blogs"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TITLE_IDX" ON "blogs"("title");

-- CreateIndex
CREATE UNIQUE INDEX "USERNAME_IDX" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "EMAIL_IDX" ON "users"("email");

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_author_id_foreign" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interactions" ADD CONSTRAINT "interactions_author_id_foreign" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interactions" ADD CONSTRAINT "interactions_blog_id_foreign" FOREIGN KEY ("blogId") REFERENCES "blogs"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

