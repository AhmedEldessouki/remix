-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT,
    "repoUrl" TEXT NOT NULL,
    "projectType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tag" (
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT,
    CONSTRAINT "Tag_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "url" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT,
    CONSTRAINT "Image_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
